import Button from "./Button";
import Container from "./Container";
import logo from "../assets/logo.jpg";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <>
      <header className=" bg-greenngo relative z-20 text-white w-screen font-popins ">
        <Container className="flex h-[150px] items-center justify-between pt-2">
          <div className=" w-full flex items-center justify-between">
            <a
              href="/"
              className="-ml-6 flex items-center px-6 text-xl"
            >
              <img className=" w-60 h-36 z-40" src="/posters/Headerlogo1.jpeg" alt="logo" />
              <span className="sr-only">Back to homepage</span>
            </a>
            <p className="text-xl font-semibold">
              Khushhal Gram Samaj Vikas Foundation
            </p>
          </div>
          {/* <Button size="medium">Donate now</Button> */}
        </Container>
      </header>
      <div className=" bg-greenngo sticky top-0 z-20 text-white py-4 w-screen">
        <Container className="">
          <div className="hidden lg:block">
          <div className=" flex min-h-[--header-row-height] items-center justify-end gap-5">
          <p className="text-lg font-medium">Home</p>
          <p className="text-lg font-medium">About KGSV</p>
          {/* <p className="text-lg font-medium">Remembering Gurudev</p> */}
          {/* <p className="text-lg font-medium">Plans</p> */}
          <p className="text-lg font-medium">Posts</p>
          <p className="text-lg font-medium">Credentials</p>
          {/* <p className="text-lg font-medium">Donate</p> */}
          
          <p className="text-lg font-medium">Team</p>
          <p className="text-lg font-medium">Associates</p>
          <p className="text-lg font-medium">Media</p>
          {/* <p className="text-lg font-medium">Videos</p> */}
          <p className="text-lg font-medium">Contact</p>
          </div>
          </div>
          <div className="lg:hidden">
            <IoMdMenu size={30} color="#F3CA52" />
          
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
