"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Define the MockData type
type MockData = {
  acumulacionCarpogrados: Array<{
    mes: string;
    tempMin: number;
    tempMax: number;
    carpogradosDiarios: number;
    carpogradosAcumulados: number;
  }>;
  aplicacionInsecticidas: Array<{
    fechaAplicacion: string;
    generacion: string;
    diasAplicados: number;
    reduccionEsperada: number;
    poblacionPreTratamiento: string;
    poblacionPostTratamiento: string;
  }>;
  analisisEconomico: Array<{
    concepto: string;
    costoPorHectarea: number;
    areaTratada: number;
    costoTotal: number;
    isTotal?: boolean;
    isLoss?: boolean;
    isSaving?: boolean;
  }>;
  eficaciaPrograma: Array<{
    metrica: string;
    sinControl: string;
    conControl: string;
    reduccion: string;
  }>;
};

// Datos para gráficos

const chartData = {
  costosPrevencion: [
    { mes: 1, costo: 5 },
    { mes: 10, costo: 12 },
    { mes: 20, costo: 18 },
    { mes: 30, costo: 15 },
  ],
  gradosDias: [
    { fecha: "22/08", grados: 8 },
    { fecha: "23/09", grados: 16 },
    { fecha: "24/10", grados: 12 },
    { fecha: "25/09", grados: 18 },
  ],
  poblacionPlagas: [
    { mes: 1, poblacion: 5 },
    { mes: 10, poblacion: 18 },
    { mes: 20, poblacion: 15 },
    { mes: 30, poblacion: 8 },
  ],
  cantidadAtrapada: [
    { trampa: 1, cantidad: 15 },
    { trampa: 2, cantidad: 8 },
    { trampa: 3, cantidad: 12 },
    { trampa: 4, cantidad: 18 },
    { trampa: 5, cantidad: 6 },
    { trampa: 6, cantidad: 14 },
    { trampa: 7, cantidad: 20 },
  ],
};

export default function ReportesPage() {
  const [loading, setLoading] = useState(true);
  const [mockData, setMockData] = useState<MockData | null>(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    const dataString = localStorage.getItem("resultadoSimulacion");
    if (dataString) {
      try {
        const parsed = JSON.parse(dataString) as MockData;
        setMockData(parsed);
      } catch (e) {
        console.error("Error al parsear JSON:", e);
      }
    }
  }, []);

  if (!mockData) {
    return (
      <main className="container">
        <p>Cargando datos del reporte...</p>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="header">
        <Link href="/" className="back-button">
          ← Volver
        </Link>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h1>Reporte de Simulación - Plaga de Carpocapsa</h1>
          <p>Período de Simulación: 1 de Agosto 2024 - 31 de Marzo 2025</p>
        </div>
        {/* <button className="download-button">📥 Descargar PDF</button> */}
      </div>

      {/* Gráficos
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <span className="chart-icon red">📈</span>
            <h3>Costos de Prevención de Plagas</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData.costosPrevencion}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="costo"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <span className="chart-icon blue">📈</span>
            <h3>Grados Días</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData.gradosDias}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="grados"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <span className="chart-icon green">🐛</span>
            <h3>Población de Plagas</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData.poblacionPlagas}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="poblacion"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <span className="chart-icon purple">📊</span>
            <h3>Cantidad Atrapada por Trampa</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData.cantidadAtrapada}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="trampa" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div> */}

      {/* Tablas */}
      <div className="card">
        <h2>Acumulación de Carpogrados por Mes</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Mes</th>
                <th>Temp. Min (°C)</th>
                <th>Temp. Max (°C)</th>
                <th>Promedio de Carpogrados Diarios</th>
                <th>Carpogrados Acumulados</th>
              </tr>
            </thead>
            <tbody>
              {mockData?.acumulacionCarpogrados?.map((row, index) => (
                <tr key={index}>
                  <td className="bold">{row.mes}</td>
                  <td>{row.tempMin}</td>
                  <td>{row.tempMax}</td>
                  <td>{row.carpogradosDiarios}</td>
                  <td className="bold">{row.carpogradosAcumulados}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Aplicaciones de Insecticidas</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Fecha Aplicación</th>
                <th>Generación</th>
                <th>Reducción Esperada (%)</th>
                <th>Población Pre-Tratamiento</th>
                <th>Población Post-Tratamiento</th>
              </tr>
            </thead>
            <tbody>
              {mockData?.aplicacionInsecticidas?.map((row, index) => (
                <tr key={index}>
                  <td className="bold">{row.fechaAplicacion}</td>
                  <td>{`${row.generacion}°`}</td>
                  <td>
                    <span className="chip">{row.reduccionEsperada}%</span>
                  </td>
                  <td>{row.poblacionPreTratamiento}</td>
                  <td className="success bold">
                    {row.poblacionPostTratamiento}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Análisis Económico del Control</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Costo por Hectárea (USD)</th>
                <th>Costo Total (USD)</th>
              </tr>
            </thead>
            <tbody>
              {mockData?.analisisEconomico?.map((row, index) => (
                <tr
                  key={index}
                  className={
                    row.isTotal
                      ? "total-row"
                      : row.isLoss
                      ? "loss-row"
                      : row.isSaving
                      ? "saving-row"
                      : ""
                  }
                >
                  <td className="bold">{row.concepto}</td>
                  <td>${row.costoPorHectarea.toFixed(2)}</td>
                  <td
                    className={`${
                      row.isSaving ? "success" : row.isLoss ? "error" : ""
                    } bold`}
                  >
                    ${row.costoTotal.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2>Eficacia del Programa de Control</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Sin Control</th>
                <th>Con Control</th>
                <th>Reducción (%)</th>
              </tr>
            </thead>
            <tbody>
              {mockData?.eficaciaPrograma?.map((row, index) => (
                <tr key={index}>
                  <td className="bold">{row.metrica}</td>
                  <td className="error">{row.sinControl}</td>
                  <td className="success bold">{row.conControl}</td>
                  <td>
                    <span className="chip">{row.reduccion}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          min-height: 100vh;
        }
        .loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #2e7d32;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
          text-align: center;
        }
        h1 {
          color: #2e7d32;
          margin-bottom: 0.5rem;
          font-size: 2rem;
        }
        .back-button {
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid #2e7d32;
          color: #2e7d32;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 500;
        }
        .download-button {
          padding: 0.5rem 1rem;
          background: #2e7d32;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .chart-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .chart-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .chart-icon {
          font-size: 1.2rem;
        }
        .chart-icon.red {
          color: #ef4444;
        }
        .chart-icon.blue {
          color: #3b82f6;
        }
        .chart-icon.green {
          color: #10b981;
        }
        .chart-icon.purple {
          color: #8b5cf6;
        }
        .chart-container {
          height: 200px;
        }
        h3 {
          margin: 0;
          color: #333;
          font-size: 1.1rem;
        }
        .card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }
        h2 {
          margin-top: 0;
          color: #333;
          font-size: 1.5rem;
        }
        .table-container {
          overflow-x: auto;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th,
        td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        th {
          background-color: #f9f9f9;
          font-weight: 600;
        }
        .bold {
          font-weight: 600;
        }
        .success {
          color: #2e7d32;
        }
        .error {
          color: #d32f2f;
        }
        .chip {
          background-color: #e8f5e9;
          color: #2e7d32;
          padding: 0.25rem 0.5rem;
          border-radius: 16px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .total-row {
          background-color: #e3f2fd;
        }
        .loss-row {
          background-color: #ffebee;
        }
        .saving-row {
          background-color: #e8f5e8;
        }
        @media (max-width: 768px) {
          .charts-grid {
            grid-template-columns: 1fr;
          }
          .header {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </main>
  );
}
