import { Logo } from "./Logo";
import { Menu } from "./Menu";


export function Header() {
    return (
        <header className="bg-purple-400 py-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />

                <Menu />
            </div>
        </header>
    );
}