/*

*/
interface ComponenteHijoProps {
  sendData: (data: string) => void;
}
function ComponenteHijo({ sendData }: ComponenteHijoProps) {
  const sendDataToParent = () => {
    sendData("Hola desde el hijo");
  };
  
  return <button onClick={sendDataToParent}>Enviar al Padre</button>;
}

export default function Ejem15b() {
  const handleChildData = (data: string) => {
    console.log("Datos recibidos del hijo:", data);
  };

  return <>
    <ComponenteHijo sendData={handleChildData} />
    <ComponenteHijo sendData={handleChildData} />
  </>
}
