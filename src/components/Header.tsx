import React from 'react';

// Custom SVG definitions mimicking common Facebook icons for raw code output
const FacebookLogo = (
    <svg viewBox="0 0 24 24" className="w-10 h-10 text-blue-600 shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.016 3.655 9.18 8.441 9.947v-7.072H7.957v-2.875h2.484V9.458c0-2.464 1.492-3.805 3.693-3.805 1.056 0 2.05.084 2.327.12v2.64h-1.574c-1.233 0-1.472.587-1.472 1.446v1.89h3.218l-.515 2.875h-2.703v7.072C18.345 21.18 22 17.016 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 00-1 1h-3m-6 0h6m-6 0a1 1 0 00-1 1v3m1-4a1 1 0 00-1-1v3"></path></svg>
);
const VideoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
);
const MarketplaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
);
const GroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5m-5 0a2 2 0 100-4m0 4a2 2 0 110-4m-9-1h4m-4 0a2 2 0 110-4m0 4a2 2 0 00-2-2H9.234A4.905 4.905 0 005 13a4.905 4.905 0 00-4.234 3H1V20h2V18a4 4 0 014-4h.234A4.905 4.905 0 009 18h2V20z"></path></svg>
);
const GamingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.048 2.21A4.5 4.5 0 007.828 4.887l-2.5-1.764c-.78-.553-1.895-.443-2.5.253C2.152 3.993 2.152 4.007 2 4.607c0 .6.402 1.107.95 1.34L7 9m0 0l-5 5h14l-5-5z"></path></svg>
);
const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
);
const MessengerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 3.398 1.543 6.438 3.999 8.358A1 1 0 015 21v1c0 .552.448 1 1 1h12c.552 0 1-.448 1-1v-1a1 1 0 01.001-.642C20.457 18.438 22 15.398 22 12c0-5.523-4.477-10-10-10zM8 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
);
const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
);
const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);

interface IconProps {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NavItemProps extends IconProps {
    active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, active = false }) => (
    <a href="#" className={`flex justify-center items-center h-full w-full sm:w-[110px] cursor-pointer transition duration-200 ease-in-out ${active ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500 hover:bg-gray-100 rounded-lg sm:rounded-none'}`}>
        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${active ? 'text-blue-500' : 'text-gray-500'}`} />
    </a>
);

const ActionItem: React.FC<IconProps> = ({ icon: Icon }) => (
    <div className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full cursor-pointer ml-2 transition duration-150">
        <Icon className="w-5 h-5 text-black" />
    </div>
);

const Header: React.FC = () => {
    // Placeholder URL for user profile picture
    const profilePicUrl = "https://via.placeholder.com/32/3b82f6/ffffff?text=U";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-[56px] flex items-center justify-between px-2 sm:px-4">
            
            {/* 1. Left Section: Logo & Search */}
            <div className="flex items-center space-x-2 min-w-[200px]">
                {/* Facebook Logo */}
                <a href="/">{FacebookLogo}</a>
                
                {/* Search Input */}
                <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-2 text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input 
                        type="text" 
                        placeholder="Search Facebook" 
                        className="bg-gray-100 outline-none text-sm w-40" 
                    />
                </div>
                
                {/* Mobile Search Icon (Visible on small screens) */}
                <div className="sm:hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 w-10 h-10 rounded-full cursor-pointer">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>

            {/* 2. Center Section: Navigation Links (Hides on small screens) */}
            <nav className="hidden md:flex flex-1 justify-center h-full max-w-[650px] space-x-1">
                <NavItem icon={HomeIcon} active={true} />
                <NavItem icon={VideoIcon} />
                <NavItem icon={MarketplaceIcon} />
                <NavItem icon={GroupIcon} />
                <NavItem icon={GamingIcon} />
            </nav>

            {/* 3. Right Section: User Actions & Menu */}
            <div className="flex items-center justify-end space-x-1 min-w-[200px]">
                
                {/* Actions (Hidden on mobile) */}
                <div className="hidden md:flex items-center">
                    <ActionItem icon={PlusIcon} />
                    <ActionItem icon={MessengerIcon} />
                    <ActionItem icon={BellIcon} />
                </div>
                
                {/* Profile Avatar */}
                <div className="flex items-center ml-2 cursor-pointer hover:opacity-80 transition duration-150">
                    <img
                        src={profilePicUrl}
                        alt="User"
                        className="w-9 h-9 rounded-full object-cover"
                    />
                </div>

                {/* Mobile Menu Icon (Used for secondary actions/settings on small screens) */}
                <div className="md:hidden">
                    <ActionItem icon={MenuIcon} />
                </div>
            </div>
        </header>
    );
};

export default Header;