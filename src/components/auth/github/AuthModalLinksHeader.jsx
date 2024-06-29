import { useState } from 'preact/hooks';
import { signOut } from 'auth-astro/client';


const AuthModalLinks = ({ session }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleSignOut = async () => {
        await signOut();
        window.location.href = "/";
    };


    return session =
        <div class="relative flex justify-center items-center gap-x-2">
            <div class="flex w-24 text-white bg-black justify-center items-center rounded-2xl h-12 gap-3">
                <img
                    src={session.user.image}
                    alt="Github avatar"
                    class="w-9 z-50"
                />
                <button id="toggleModal" class="flex items-center -rotate-90" onClick={toggleModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225z"
                        />
                    </svg>
                </button>
            </div>

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

};


export default AuthModalLinks;
