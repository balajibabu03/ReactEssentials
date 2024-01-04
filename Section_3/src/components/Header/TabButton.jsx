// Eventhough we don't have any props in component, It has a children props by default.
export default function TabButton({children}){
    return(
        <li><button>{children}</button></li>
    )
}