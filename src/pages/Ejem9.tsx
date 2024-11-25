interface ComponenteConChildrenProps {
    children: React.ReactNode;
}

function ComponenteConChildren({children}: ComponenteConChildrenProps) {
    return <div>que tal estas {children}</div>
}

export default function Ejem9() {
    return <>
        <ComponenteConChildren>Angel</ComponenteConChildren>
        <ComponenteConChildren><strong>Angel</strong></ComponenteConChildren>
    </>

}