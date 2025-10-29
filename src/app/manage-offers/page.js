"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Link from "next/link";

const WORDPRESS_URL =
  "https://backend.funkymonkeylodge.com/funkymonkeylodge.com";

export default function ManageOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  // Agregar meta tags noindex para evitar indexación
  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", "noindex, nofollow");

    let metaGooglebot = document.querySelector('meta[name="googlebot"]');
    if (!metaGooglebot) {
      metaGooglebot = document.createElement("meta");
      metaGooglebot.setAttribute("name", "googlebot");
      document.head.appendChild(metaGooglebot);
    }
    metaGooglebot.setAttribute("content", "noindex, nofollow");
  }, []);

  // Cargar ofertas
  useEffect(() => {
    fetchOffers();
  }, []);

  // Recargar cuando vuelves a esta página desde otra (ej: después de editar)
  useEffect(() => {
    // Si la ruta cambió Y ahora estamos en esta página Y antes estábamos en otra
    if (
      pathname === "/manage-offers" &&
      prevPathnameRef.current !== pathname &&
      prevPathnameRef.current !== null
    ) {
      fetchOffers();
    }
    prevPathnameRef.current = pathname;
  }, [pathname]);

  const fetchOffers = async () => {
    setLoading(true);
    setError(null);
    try {
      // Usar timestamp para evitar caché
      const timestamp = Date.now();
      const response = await fetch(
        `${WORDPRESS_URL}/wp-json/offers/v1/list?t=${timestamp}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setOffers(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar oferta
  const handleDelete = async (id) => {
    setDeletingId(id);
    setError(null);

    try {
      const deleteUrl = `${WORDPRESS_URL}/wp-json/offers/v1/delete`;

      const response = await fetch(deleteUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const text = await response.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { message: text };
      }

      if (!response.ok) {
        const errorMsg =
          data.message || `Error ${response.status}: ${response.statusText}`;
        throw new Error(errorMsg);
      }

      // Recargar la lista con un pequeño delay para asegurar que el servidor procesó
      setTimeout(async () => {
        await fetchOffers();
      }, 300);

      setShowDeleteConfirm(null);
    } catch (err) {
      setError("Error al eliminar: " + err.message);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <Layout title="Gestionar Ofertas">
        <div className="py-8 md:py-12 mt-[102px] mx-4 sm:mx-8 lg:mx-[70px]">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Gestionar Ofertas">
      <div className="mt-[102px]">
        {/* Header */}
        <div className="text-center flex items-center flex-col gap-10 px-4 mb-12 mt-[50px] md:mt-[40px]">
          <h3 className="myH2">Gestionar Ofertas</h3>
          <Link href="/addoffer">
            <Button variant="primary" height="54px" classNames="w-[250px]">
              Agregar Nueva Oferta
            </Button>
          </Link>
        </div>

        {error && (
          <div className="mb-6 p-6 rounded-[16px] bg-red-50 border border-red-200 mx-4 md:mx-[70px]">
            <h3 className="subH2 text-red-600 mb-2">Error</h3>
            <p className="body3 text-red-700">{error}</p>
          </div>
        )}

        {offers.length === 0 ? (
          <div className="p-8 rounded-[16px] bg-grey2 text-center">
            <p className="body1 text-darkGrey mb-4">
              No hay ofertas disponibles
            </p>
            <Link href="/addoffer">
              <Button variant="primary">Crear Primera Oferta</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-[70px] mx-auto">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-grey2 rounded-[16px] overflow-hidden h-[550px] relative"
              >
                {/* Imagen */}
                <div className="h-[60%] relative">
                  {offer.image ? (
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-grey1 text-grey3">
                      <p className="body3">Sin imagen</p>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="h-[40%] p-6 flex flex-col justify-between">
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="subH1 mb-3 line-clamp-1">
                      {offer.title || "Sin título"}
                    </h4>
                    <p className="body1 text-darkGrey line-clamp-2">
                      {offer.description || "Sin descripción"}
                    </p>
                    {offer.voucher && (
                      <p className="body1 text-green font-semibold mt-2">
                        {offer.voucher}
                      </p>
                    )}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex gap-2 pt-4">
                    <Link
                      href={`/addoffer?edit=${offer.id}`}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        classNames="w-full"
                        height="40px"
                      >
                        Editar
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      classNames="flex-1"
                      height="40px"
                      onClick={() => setShowDeleteConfirm(offer.id)}
                      disabled={deletingId === offer.id}
                    >
                      {deletingId === offer.id ? "Eliminando..." : "Eliminar"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal de confirmación de eliminación */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-[16px] p-6 max-w-md w-full">
              <h3 className="subH2 mb-4">Confirmar Eliminación</h3>
              <p className="body1 text-darkGrey mb-6">
                ¿Estás seguro de que deseas eliminar esta oferta? Esta acción no
                se puede deshacer.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  classNames="flex-1"
                  height="45px"
                  onClick={() => setShowDeleteConfirm(null)}
                >
                  Cancelar
                </Button>
                <Button
                  variant="danger"
                  classNames="flex-1"
                  height="45px"
                  onClick={() => handleDelete(showDeleteConfirm)}
                  disabled={deletingId === showDeleteConfirm}
                >
                  {deletingId === showDeleteConfirm
                    ? "Eliminando..."
                    : "Eliminar"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Espaciado inferior similar a retreats */}
      <div className="mb-[100px]"></div>
    </Layout>
  );
}
