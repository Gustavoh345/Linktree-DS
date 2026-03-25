export function Menu(){
    return(
        <nav>
            <ul className="flex gap-2">
                <li><a href="/"/>Home</li>
                <li><a href="/login"/>Login</li>
                <li><a href="/register"/>Register</li>
            </ul>
        </nav>
    );
}