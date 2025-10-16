import Button from "./Button";
export default function PreFooter() {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-[70px]">
      <div className=" overflow-hidden bgreen-gradient rounded-[16px]  my-[100px]">
        <div className="flex flex-col items-center justify-center gap-6 py-[55px]">
          <p className="myH3 h-full text-white text-center z-10  max-w-[200px] sm:max-w-[520px] mx-auto">
            Ready for a Costa Rican adventure?
          </p>
          <Button
            variant="greenBlue"
            link="https://beds24.com/booking2.php?propid=63844"
            target="_blank"
            rel="noopener"
            classNames="w-[155px] h-[50px] transform hover:-translate-y-1 transition duration-400"
          >
            Book your stay
          </Button>
        </div>
      </div>
    </div>
  );
}
