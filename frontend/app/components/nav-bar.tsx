import clsx from "clsx";
import Link from "next/link";
import LanguageSelect from "./language-select";

const navItems = {
    "/": {
        name: "home",
    },
    "/resume": {
        name: "resume",
    },
    "/blog": {
        name: "notes"
    }
}

const navItemClass = clsx("transition-all hover:text-neutral-500 dark:hover:text-neutral-200 relative p-2 mx-2 mx-3");

export function NavBar() {
    return (
        <aside>
            <div>
                <nav id="nav">
                    <div className="flex justify-center gap-12">
                        <div className="flex">
                            <Link href="/" className={navItemClass}>Onur Akyüz</Link>
                            <div className="border-1"></div>
                            <LanguageSelect className={navItemClass} />
                        </div>
                        <div className="flex">
                            {Object.entries(navItems).map(([path, { name }]) => {
                                return (
                                    <Link
                                        key={path}
                                        href={path}
                                        className={navItemClass}
                                    >
                                        {name}
                                    </Link>
                                )
                            })}
                        </div>

                    </div>
                </nav>
            </div>
        </aside>
    )
}