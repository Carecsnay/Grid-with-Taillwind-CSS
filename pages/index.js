export default function Home() {
  return (
    <main className="container mx-auto">
      <table className="m-3 w-full">
        <thead>
          <tr className="text-xm border-b border-gray-200 text-left md:text-lg">
            <th className="p-2">Nome</th>
            <th className="hidden md:table-cell">Título</th>
            <th className="hidden md:table-cell">E-mail</th>
            <th>Função</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 text-left text-xs text-gray-600 md:text-base">
            <td className="p-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@mail.com</p>
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">mariadocafe@mail.com</td>
            <td>member</td>
            <td>
              <a href="" className="text-blue-600">
                Editar
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200 text-left text-xs text-gray-600 md:text-base">
            <td className="p-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@mail.com</p>
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">mariadocafe@mail.com</td>
            <td>member</td>
            <td>
              <a href="" className="text-blue-600">
                Editar
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200 text-left text-xs text-gray-600 md:text-base">
            <td className="p-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@mail.com</p>
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">mariadocafe@mail.com</td>
            <td>member</td>
            <td>
              <a href="" className="text-blue-600">
                Editar
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200 text-left text-xs text-gray-600 md:text-base">
            <td className="p-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">mariadocafe@mail.com</p>
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">mariadocafe@mail.com</td>
            <td>member</td>
            <td>
              <a href="" className="text-blue-600">
                Editar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
