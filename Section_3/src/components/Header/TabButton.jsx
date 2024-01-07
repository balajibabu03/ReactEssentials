// Eventhough we don't have any props in component, It has a children props by default.
export default function TabButton({children, onSelect, isSelected}){
    
    return(
        <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}