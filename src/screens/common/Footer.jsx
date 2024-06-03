const Footer = () => {
    return ( 
        <div className="footer bg-gray-200 pt-10">
            <div className="flex flex-row justify-between divide-x">
            <div className="flex flex-row gap-10 mx-auto">
            <div className="flex flex-col gap-2">
            <h3 className="font-bebas text-2xl">Help</h3>
            <ul>
                <li>Shipping</li>
                <li>Returns</li>
                <li>FAQ</li>
            </ul>
            </div>
            <div className="flex flex-col gap-2">
            <h3 className="font-bebas text-2xl">About</h3>
            <ul>
                <li>Mission</li>
                <li>Materials</li>
                <li>Reviews</li>
            </ul>
            </div>
            <div className="flex flex-col gap-2">
            <h3 className="font-bebas text-2xl">Resources</h3>
            <ul>
                <li>Jewelery Care</li>
                <li>Ring Size Chart</li>
                <li>Membership</li>
            </ul>
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Footer;