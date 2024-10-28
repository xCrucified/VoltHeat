import { cn } from "../../../lib/utils";
import Image from 'next/image'
import { Button } from "../ui/lib";
import { ArrowRight, ShoppingBag, User } from "lucide-react";
import { Container } from "./lib";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header style={{  background: "linear-gradient(to right, rgb(227, 227, 227) , rgb(222, 221, 220))"}} className={cn('border border-b', className)}>
            <Container className="flex items-center justify-between py-8">
                {/* left side */}
                <div className="flex items-center gap-4">
                    <Image src={"/VOLTHEAT_LOGO.png"} alt="Logo" width={45} height={45}/>

                    <div>
                        <h1 className="text-2xl uppercase font-black">VOLTHEAT</h1>
                        <p className="text-sm text-gray-400 leading-3">Тепло майбутнього: енергія без меж!</p>
                    </div>
                </div>  
                {/* right side */}
                {/* <div className="flex items-center gap-3">
                    <Button variant={"outline"} className="flex items-center gap-2"> 
                        <User size={16}/>
                        Log in
                    </Button>

                    <div style={{background: "linear-gradient(to right, rgb(227, 227, 227) , rgb(222, 221, 220))"}}>
                        <Button className="group relative"> 
                            <b>999 $</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3"/>

                            <div className="flex items-center gap-1 duration-300 group-hover:opacity-0">
                                <ShoppingBag size={16} className="relative" strokeWidth={2}/>
                                <b>3</b>
                            </div>
                            <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </div>
                </div> */}
            </Container>
        </header>
    );
};
