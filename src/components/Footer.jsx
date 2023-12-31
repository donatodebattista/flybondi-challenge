export const Footer = () =>{
    
return(
    <footer className="bg-footer text-white shadow mb-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <svg className="w-6" viewBox="0 0 20 20"><path fill="#fdbe15" d="M12.496 17.414c-.394-1.096-1.805-4.775-2.39-6.297c-1.103.737-2.334 1.435-3.512 1.928c-.366 1.28-1.094 3.709-1.446 4.033c-.604.557-.832.485-.925-.279c-.093-.764-.485-3.236-.485-3.236s-2.162-1.219-2.84-1.568s-.667-.591.057-.974c.422-.223 2.927-.085 4.242.005c.861-.951 1.931-1.882 2.993-2.679c-1.215-1.076-4.15-3.675-5.034-4.424c-.776-.658.079-.797.079-.797c.39-.07 1.222-.132 1.628-.009c2.524.763 6.442 2.068 7.363 2.376l1.162-.821c4.702-3.33 5.887-2.593 6.111-2.27s.503 1.701-4.199 5.032l-1.16.823c-.029.98-.157 5.151-.311 7.811c-.025.428-.367 1.198-.565 1.544c-.001 0-.423.765-.768-.198z"/></svg>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flybondi</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Flybondi™</a>. All Rights Reserved.</span>
        </div>
    </footer>

)
}