
const TextIcon = ({ icon, children }) => {
    return (
        <div className="flex a-c">
            <span>{children}</span>
            {icon}
        </div>
    );
}

export default TextIcon;
