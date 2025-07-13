import React from 'react'
import styled from 'styled-components'
import { RainfallData } from '@types'
import { CloudIcon } from '@heroicons/react/24/outline'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface RainfallChartProps {
  data: RainfallData[]
}

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  font-weight: 600;
  font-size: 16px;
`

const ChartWrapper = styled.div`
  height: 200px;
  width: 100%;
`

const CustomTooltip = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const TooltipLabel = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`

const TooltipValue = styled.div`
  color: #666;
  font-size: 14px;
`

const CustomTooltipContent = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltip>
        <TooltipLabel>{label}</TooltipLabel>
        <TooltipValue>Rainfall: {payload[0].value}mm</TooltipValue>
        <TooltipValue>Probability: {payload[0].payload.probability}%</TooltipValue>
      </CustomTooltip>
    )
  }
  return null
}

export const RainfallChart: React.FC<RainfallChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    day: item.day,
    rainfall: item.amount,
    probability: item.probability
  }))

  return (
    <ChartContainer>
      <ChartHeader>
        <CloudIcon width={20} height={20} style={{ color: '#4A90E2' }} />
        Rainfall Forecast
      </ChartHeader>
      
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 12, fill: '#666' }}
              axisLine={{ stroke: '#e0e0e0' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#666' }}
              axisLine={{ stroke: '#e0e0e0' }}
              tickLine={false}
              label={{ value: 'mm', position: 'insideLeft', style: { textAnchor: 'middle', fill: '#666' } }}
            />
            <Tooltip content={<CustomTooltipContent />} />
            <Bar 
              dataKey="rainfall" 
              fill="#4A90E2" 
              radius={[4, 4, 0, 0]}
              opacity={0.8}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </ChartContainer>
  )
}