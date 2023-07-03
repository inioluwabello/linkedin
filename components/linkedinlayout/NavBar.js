import Logo from './Logo'
import SearchBar from './SearchBar'
import Nav from './Nav'
const NavBar = ({ page, setPage, profileImg, userName, newPost, isMobile }) => {
    return (
        <>
            <div className="space-between">
                <div>
                    <Logo />
                    <SearchBar />
                </div>
                <Nav page={page} setPage={setPage} profileImg={profileImg} userName={userName} newPost={newPost} isMobile={isMobile} />
            </div>
        </>
    )
}
export default NavBar;