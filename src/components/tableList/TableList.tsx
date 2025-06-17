import { Text, View } from '@react-pdf/renderer'
import { tw } from '../../utils/tailwind'
import { renderText } from '../../utils/renders'

interface TableListProps {
  tableRows: [
    [string]
  ]
  tableHeader: string[]
  color: string
  fontSize?: string
  marginBottom?: number
  marginTop?: number
}

const TableList = ({ 
  tableRows, 
  tableHeader, 
  color = "section-yellow",
  fontSize = '12px',
  marginBottom = 12,
  marginTop = 0,
}: TableListProps) => {
  return (
    <View style={tw(`gap-2 flex flex-col justify-center mb-${marginBottom} mt-${marginTop} text-[${fontSize}] text-center text-black font-bold`)}>
      <View wrap={false} style={tw('flex flex-row justify-center gap-2')}>
        {tableHeader.map((tableHeader, cellIndex) => (
          <View key={`header-${cellIndex}`} style={tw(`rounded-md flex justify-center items-center bg-${color} text-white h-[62px] flex-1`)}>
            <Text style={tw('uppercase')}>
              {tableHeader}
            </Text>
          </View>
        ))}
      </View>
      {tableRows.map((tableRow, rowIndex) => {
        return (
          <View wrap={false} style={tw('flex flex-row justify-center gap-2')} key={`row-${rowIndex}`}>
            {tableRow.map((tableCell, cellIndex) => {
              const isFirstCell = cellIndex === 0

              return (
                <View key={`cell-${cellIndex}`} style={tw('p-4 pb-4 rounded-md bg-[#F2F2F2] h-full flex-1')}>
                  <View style={tw(isFirstCell ? '' : 'font-normal text-left')}>
                    {renderText(tableCell)}
                  </View>
                </View>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

export default TableList