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

const navItemClass = clsx("transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1");

export function NavBar() {
    return (
        <aside>
            <div>
                <nav id="nav">
                    <div className="flex flex-row space-x-0 pr-10">
                        <p className={navItemClass}>Onur Akyüz</p>
                        <LanguageSelect className={navItemClass} />
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
                </nav>
            </div>
        </aside>
    )
}