import React from 'react'
import { Container } from 'theme-ui'
import Helmet from 'react-helmet'
import Layout from '@solid-ui-layout/Layout'
import NivoLine from "./NivoLine";
import { aprilItems, marchItems } from "./items";

const TablePage = props => {
  return (
    <Layout {...props}>
      <Helmet>
        <style type='text/css'>{`
          table {
            width:100%;
            border:1px solid #b3adad;
            border-collapse:collapse;
            padding:5px;
          }
          table th {
            border:1px solid #b3adad;
            padding:5px;
            background: #f0f0f0;
            color: #313030;
          }
          table td {
            border:1px solid #b3adad;
            text-align:center;
            padding:5px;
            background: #ffffff;
            color: #313030;
          }
      `}</style>
      </Helmet>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hello</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Testing</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Aurelian</td>
              <td>3</td>
              <td>5</td>
              <td>7</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Table</td>
              <td>22</td>
              <td>7</td>
              <td>3</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Layout>
  )
}

const [item, setItem] = useState(aprilItems);

  const series = [
    {
      id: `charges`,
      data: item.data,
    },
  ];

  const axisBottom = {
    format: "%d/%m",
    tickSize: 0,
    tickPadding: 10,
    tickValues: 7,
  };

  const yFormat = (value: string) => `${value}`;
  const xFormat = "time:%d de %B";

  return (
    <div className={"flex"}>
      <Flex p="10px">
        <button onClick={() => setItem(marchItems)}>show march data</button>
        <button onClick={() => setItem(aprilItems)}>show april data</button>
      </Flex>

      <Flex p="10px" flexDirection={"column"}>
        <Text>is showing {item.label}</Text>
        <Flex height={"300px"}>
          <NivoLine
            data={series}
            axisBottom={axisBottom}
            yFormat={yFormat}
            xFormat={xFormat}
          />
        </Flex>
      </Flex>
    </div>
  );


export default TablePage
