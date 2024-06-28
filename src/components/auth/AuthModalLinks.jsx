import { h } from 'preact';
import { useState } from 'preact/hooks';
import { signIn, signOut } from 'auth-astro/client';
import Github from "../../icons/Github.astro";

const AuthModalLinks = ({ session }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSignOut = async () => {
        await signOut();
        window.location.href = "/";
    };

    return session ? (
        <div class="relative flex justify-center items-center gap-x-2">
            <button class="bg-black text-white rounded-2xl h-12 w-40 text-sm text-center flex justify-center items-center gap-x-1">
                <img
                    src={session.user?.image}
                    alt="Github avatar"
                    class="w-9"
                />{" "}
                {session.user?.name}
            </button>

            <button id="toggleModal" class="flex items-center" onClick={toggleModal}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16">
                    <path
                        fill="currentColor"
                        d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" />
                </svg>
            </button>

            {isModalOpen && (
                <div id="modal" class="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg">
                    <ul class="p-2 text-[#667085]">
                        <li>
                            <a href="/auth/viewProfile" class="block px-4 py-2 hover:bg-gray-200">
                                View Profile
                            </a>
                        </li>
                        <li>
                            <a href="/auth/myProjects" class="block px-4 py-2 hover:bg-gray-200">
                                My Projects
                            </a>
                        </li>

                        <div class="border-t" />
                        <li>
                            <a id="logout" class="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={handleSignOut}>
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    ) : (
        <button id="login" class="bg-black text-white rounded-2xl h-12 w-40 text-1xl text-center flex justify-center items-center gap-x-2" onClick={() => signIn("github")}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
            Sign Up
        </button>
    );
};

export default AuthModalLinks;
