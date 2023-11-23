
export function Header(){
    return (
        <div className="bg-gray-100 min-w-screen">
        <header className="w-full text-gray-700 bg-white border-gray-100 shadow-sm body-font">
            <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
    
                <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
                    <a href="#_" className="mr-5 font-medium hover:text-gray-900">Home</a>
                    <a href="#_" className="mr-5 font-medium hover:text-gray-900">About</a>
                    <a href="#_" className="font-medium hover:text-gray-900">Contact</a>
                </nav>
                <a  href="/"
                    className="flex items-center order-first mb-4 font-medium font-bold text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
                    <h1>Flybondi</h1>
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#fdbe15" d="M12.496 17.414c-.394-1.096-1.805-4.775-2.39-6.297c-1.103.737-2.334 1.435-3.512 1.928c-.366 1.28-1.094 3.709-1.446 4.033c-.604.557-.832.485-.925-.279c-.093-.764-.485-3.236-.485-3.236s-2.162-1.219-2.84-1.568s-.667-.591.057-.974c.422-.223 2.927-.085 4.242.005c.861-.951 1.931-1.882 2.993-2.679c-1.215-1.076-4.15-3.675-5.034-4.424c-.776-.658.079-.797.079-.797c.39-.07 1.222-.132 1.628-.009c2.524.763 6.442 2.068 7.363 2.376l1.162-.821c4.702-3.33 5.887-2.593 6.111-2.27s.503 1.701-4.199 5.032l-1.16.823c-.029.98-.157 5.151-.311 7.811c-.025.428-.367 1.198-.565 1.544c-.001 0-.423.765-.768-.198z"/></svg>
                </a>
                <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
                    <a href="#_" className="mr-5 font-medium hover:text-gray-900">Login</a>
                    <a href="#_"
                        className="px-4 py-2 text-sm font-bold font-sans text-white transition-all duration-150 bg-btn-primary rounded shadow outline-none hover:shadow-md hover:bg-btn-hover ease">
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    </div>

    )
}