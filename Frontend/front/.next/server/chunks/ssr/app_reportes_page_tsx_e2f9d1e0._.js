module.exports = {

"[project]/app/reportes/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReportesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Datos simulados para las tablas
// const mockData = {
//   acumulacionCarpogrados: [
//     {
//       mes: "Agosto",
//       tempMin: 0.8,
//       tempMax: 16.3,
//       carpogradosDiarios: 8.55,
//       carpogradosAcumulados: 265.05,
//       diasMes: 31,
//     },
//     {
//       mes: "Septiembre",
//       tempMin: 3.3,
//       tempMax: 19.4,
//       carpogradosDiarios: 11.35,
//       carpogradosAcumulados: 605.55,
//       diasMes: 30,
//     },
//     {
//       mes: "Octubre",
//       tempMin: 6.8,
//       tempMax: 22.8,
//       carpogradosDiarios: 14.8,
//       carpogradosAcumulados: 1064.35,
//       diasMes: 31,
//     },
//     {
//       mes: "Noviembre",
//       tempMin: 9.7,
//       tempMax: 26.4,
//       carpogradosDiarios: 18.05,
//       carpogradosAcumulados: 1606.85,
//       diasMes: 30,
//     },
//     {
//       mes: "Diciembre",
//       tempMin: 12.3,
//       tempMax: 29.3,
//       carpogradosDiarios: 20.8,
//       carpogradosAcumulados: 2251.65,
//       diasMes: 31,
//     },
//     {
//       mes: "Enero",
//       tempMin: 13.4,
//       tempMax: 30.7,
//       carpogradosDiarios: 22.05,
//       carpogradosAcumulados: 2935.2,
//       diasMes: 31,
//     },
//     {
//       mes: "Febrero",
//       tempMin: 12.3,
//       tempMax: 29.5,
//       carpogradosDiarios: 20.9,
//       carpogradosAcumulados: 3520.4,
//       diasMes: 28,
//     },
//     {
//       mes: "Marzo",
//       tempMin: 9.6,
//       tempMax: 26.3,
//       carpogradosDiarios: 17.95,
//       carpogradosAcumulados: 4076.85,
//       diasMes: 31,
//     },
//   ],
//   aplicacionInsecticidas: [
//     {
//       fechaAplicacion: "28-29 Agosto",
//       generacion: "2ª",
//       diasAplicados: 2,
//       reduccionEsperada: 99.0,
//       poblacionPreTratamiento: "2,508 larvas",
//       poblacionPostTratamiento: "25 larvas",
//     },
//     {
//       fechaAplicacion: "18-19 Septiembre",
//       generacion: "2ª",
//       diasAplicados: 2,
//       reduccionEsperada: 99.0,
//       poblacionPreTratamiento: "4,092 larvas",
//       poblacionPostTratamiento: "41 larvas",
//     },
//     {
//       fechaAplicacion: "12-13 Octubre",
//       generacion: "3ª",
//       diasAplicados: 2,
//       reduccionEsperada: 99.0,
//       poblacionPreTratamiento: "8,398 larvas",
//       poblacionPostTratamiento: "84 larvas",
//     },
//     {
//       fechaAplicacion: "28-29 Diciembre",
//       generacion: "3ª",
//       diasAplicados: 2,
//       reduccionEsperada: 99.0,
//       poblacionPreTratamiento: "12,584 larvas",
//       poblacionPostTratamiento: "126 larvas",
//     },
//   ],
//   analisisEconomico: [
//     {
//       concepto: "Trampas de Confusión (4 unidades)",
//       costoPorHectarea: 45.0,
//       areaTratada: 12,
//       costoTotal: 540.0,
//     },
//     {
//       concepto: "Insecticida (8 aplicaciones)",
//       costoPorHectarea: 28.5,
//       areaTratada: 12,
//       costoTotal: 342.0,
//     },
//     {
//       concepto: "Mano de obra aplicación",
//       costoPorHectarea: 15.0,
//       areaTratada: 12,
//       costoTotal: 180.0,
//     },
//     {
//       concepto: "Monitoreo semanal",
//       costoPorHectarea: 8.0,
//       areaTratada: 12,
//       costoTotal: 96.0,
//     },
//     {
//       concepto: "Total Inversión",
//       costoPorHectarea: 96.5,
//       areaTratada: 12,
//       costoTotal: 1158.0,
//       isTotal: true,
//     },
//     {
//       concepto: "Pérdida estimada sin control",
//       costoPorHectarea: 450.0,
//       areaTratada: 12,
//       costoTotal: 5400.0,
//       isLoss: true,
//     },
//     {
//       concepto: "Ahorro Neto",
//       costoPorHectarea: 353.5,
//       areaTratada: 12,
//       costoTotal: 4242.0,
//       isSaving: true,
//     },
//   ],
//   eficaciaPrograma: [
//     {
//       metrica: "Población final de larvas",
//       sinControl: "15,843",
//       conControl: "276",
//       reduccion: "98.3%",
//     },
//     {
//       metrica: "Frutos dañados estimados",
//       sinControl: "1,267",
//       conControl: "22",
//       reduccion: "98.3%",
//     },
//     {
//       metrica: "Carpogrados críticos superados",
//       sinControl: "4",
//       conControl: "0",
//       reduccion: "100%",
//     },
//     {
//       metrica: "Cumplimiento umbral SENASA",
//       sinControl: "15%",
//       conControl: "85%",
//       reduccion: "+70%",
//     },
//   ],
// };
// Datos para gráficos
const chartData = {
    costosPrevencion: [
        {
            mes: 1,
            costo: 5
        },
        {
            mes: 10,
            costo: 12
        },
        {
            mes: 20,
            costo: 18
        },
        {
            mes: 30,
            costo: 15
        }
    ],
    gradosDias: [
        {
            fecha: "22/08",
            grados: 8
        },
        {
            fecha: "23/09",
            grados: 16
        },
        {
            fecha: "24/10",
            grados: 12
        },
        {
            fecha: "25/09",
            grados: 18
        }
    ],
    poblacionPlagas: [
        {
            mes: 1,
            poblacion: 5
        },
        {
            mes: 10,
            poblacion: 18
        },
        {
            mes: 20,
            poblacion: 15
        },
        {
            mes: 30,
            poblacion: 8
        }
    ],
    cantidadAtrapada: [
        {
            trampa: 1,
            cantidad: 15
        },
        {
            trampa: 2,
            cantidad: 8
        },
        {
            trampa: 3,
            cantidad: 12
        },
        {
            trampa: 4,
            cantidad: 18
        },
        {
            trampa: 5,
            cantidad: 6
        },
        {
            trampa: 6,
            cantidad: 14
        },
        {
            trampa: 7,
            cantidad: 20
        }
    ]
};
const mockDataStatic = {
    acumulacionCarpogrados: [
        {
            mes: "Agosto",
            tempMin: 0.8,
            tempMax: 16.3,
            carpogradosDiarios: 8.55,
            carpogradosAcumulados: 265.05,
            diasMes: 31
        },
        {
            mes: "Septiembre",
            tempMin: 3.3,
            tempMax: 19.4,
            carpogradosDiarios: 11.35,
            carpogradosAcumulados: 605.55,
            diasMes: 30
        },
        {
            mes: "Octubre",
            tempMin: 6.8,
            tempMax: 22.8,
            carpogradosDiarios: 14.8,
            carpogradosAcumulados: 1064.35,
            diasMes: 31
        },
        {
            mes: "Noviembre",
            tempMin: 9.7,
            tempMax: 26.4,
            carpogradosDiarios: 18.05,
            carpogradosAcumulados: 1606.85,
            diasMes: 30
        },
        {
            mes: "Diciembre",
            tempMin: 12.3,
            tempMax: 29.3,
            carpogradosDiarios: 20.8,
            carpogradosAcumulados: 2251.65,
            diasMes: 31
        },
        {
            mes: "Enero",
            tempMin: 13.4,
            tempMax: 30.7,
            carpogradosDiarios: 22.05,
            carpogradosAcumulados: 2935.2,
            diasMes: 31
        },
        {
            mes: "Febrero",
            tempMin: 12.3,
            tempMax: 29.5,
            carpogradosDiarios: 20.9,
            carpogradosAcumulados: 3520.4,
            diasMes: 28
        },
        {
            mes: "Marzo",
            tempMin: 9.6,
            tempMax: 26.3,
            carpogradosDiarios: 17.95,
            carpogradosAcumulados: 4076.85,
            diasMes: 31
        }
    ],
    aplicacionInsecticidas: [
        {
            fechaAplicacion: "28-29 Agosto",
            generacion: "1ª",
            diasAplicados: 2,
            reduccionEsperada: 99.0,
            poblacionPreTratamiento: "2,508 larvas",
            poblacionPostTratamiento: "25 larvas"
        },
        {
            fechaAplicacion: "18-19 Septiembre",
            generacion: "2ª",
            diasAplicados: 2,
            reduccionEsperada: 99.0,
            poblacionPreTratamiento: "4,092 larvas",
            poblacionPostTratamiento: "41 larvas"
        },
        {
            fechaAplicacion: "12-13 Diciembre",
            generacion: "3ª",
            diasAplicados: 2,
            reduccionEsperada: 99.0,
            poblacionPreTratamiento: "8,398 larvas",
            poblacionPostTratamiento: "84 larvas"
        }
    ],
    analisisEconomico: [
        {
            concepto: "Trampas de Confusión (4 unidades)",
            costoPorHectarea: 45.0,
            areaTratada: 12,
            costoTotal: 540.0
        },
        {
            concepto: "Insecticida (8 aplicaciones)",
            costoPorHectarea: 28.5,
            areaTratada: 12,
            costoTotal: 342.0
        },
        {
            concepto: "Mano de obra aplicación",
            costoPorHectarea: 15.0,
            areaTratada: 12,
            costoTotal: 180.0
        },
        {
            concepto: "Monitoreo semanal",
            costoPorHectarea: 8.0,
            areaTratada: 12,
            costoTotal: 96.0
        },
        {
            concepto: "Total Inversión",
            costoPorHectarea: 96.5,
            areaTratada: 12,
            costoTotal: 1158.0,
            isTotal: true
        },
        {
            concepto: "Pérdida estimada sin control",
            costoPorHectarea: 450.0,
            areaTratada: 12,
            costoTotal: 5400.0,
            isLoss: true
        },
        {
            concepto: "Ahorro Neto",
            costoPorHectarea: 353.5,
            areaTratada: 12,
            costoTotal: 4242.0,
            isSaving: true
        }
    ],
    eficaciaPrograma: [
        {
            metrica: "Población final de larvas",
            sinControl: "15,843",
            conControl: "276",
            reduccion: "98.3%"
        },
        {
            metrica: "Población final de adultos",
            sinControl: "4,483",
            conControl: "15",
            reduccion: "99.7%"
        },
        {
            metrica: "Frutos dañados estimados",
            sinControl: "1,267",
            conControl: "22",
            reduccion: "98.3%"
        },
        {
            metrica: "Cumplimiento umbral SENASA",
            sinControl: "15%",
            conControl: "85%",
            reduccion: "+70%"
        }
    ]
};
function ReportesPage() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mockData, setMockData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>setLoading(false), 1000);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dataString = localStorage.getItem("resultadoSimulacion");
        if (dataString) {
            try {
                const parsed = JSON.parse(dataString);
                setMockData(parsed);
                console.log("Datos del reporte:", typeof mockData?.acumulacionCarpogrados);
                // console.log("Mock Data de variab:", mockData);
                console.log("Mock Data cargado:");
            } catch (e) {
                console.error("Error al parsear JSON:", e);
            }
        }
    }, [
        mockData
    ]);
    if (!mockData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Cargando datos del reporte..."
            }, void 0, false, {
                fileName: "[project]/app/reportes/page.tsx",
                lineNumber: 457,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/reportes/page.tsx",
            lineNumber: 456,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-911692e6edb4d43b" + " " + "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-911692e6edb4d43b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "jsx-911692e6edb4d43b",
                    children: typeof mockData
                }, void 0, false, {
                    fileName: "[project]/app/reportes/page.tsx",
                    lineNumber: 465,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/reportes/page.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-911692e6edb4d43b" + " " + "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "back-button",
                        children: "← Volver"
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            width: "100%"
                        },
                        className: "jsx-911692e6edb4d43b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-911692e6edb4d43b",
                                children: "Reporte de Simulación - Plaga de Carpocapsa"
                            }, void 0, false, {
                                fileName: "[project]/app/reportes/page.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-911692e6edb4d43b",
                                children: "Período de Simulación: 1 de Agosto 2024 - 31 de Marzo 2025"
                            }, void 0, false, {
                                fileName: "[project]/app/reportes/page.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reportes/page.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-911692e6edb4d43b" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-911692e6edb4d43b",
                        children: "Acumulación de Carpogrados por Mes"
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-911692e6edb4d43b" + " " + "table-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "jsx-911692e6edb4d43b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "jsx-911692e6edb4d43b",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "jsx-911692e6edb4d43b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Mes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Temp. Min (°C)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 577,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Temp. Max (°C)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Carpogrados Diarios"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 579,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Carpogrados Acumulados"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 580,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Días del Mes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 581,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/reportes/page.tsx",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/reportes/page.tsx",
                                    lineNumber: 574,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "jsx-911692e6edb4d43b",
                                    children: mockData?.acumulacionCarpogrados?.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "jsx-911692e6edb4d43b",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + "bold",
                                                    children: row.mes
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: row.tempMin
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: row.tempMax
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: row.carpogradosDiarios
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 590,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + "bold",
                                                    children: row.carpogradosAcumulados
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: row.diasMes
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/reportes/page.tsx",
                                            lineNumber: 586,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/reportes/page.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reportes/page.tsx",
                            lineNumber: 573,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 572,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reportes/page.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-911692e6edb4d43b" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-911692e6edb4d43b",
                        children: "Aplicaciones de Insecticidas"
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-911692e6edb4d43b" + " " + "table-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "jsx-911692e6edb4d43b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "jsx-911692e6edb4d43b",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "jsx-911692e6edb4d43b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Fecha Aplicación"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 606,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Generación"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Días Aplicados"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Reducción Esperada (%)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 609,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Población Pre-Tratamiento"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 610,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Población Post-Tratamiento"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 611,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/reportes/page.tsx",
                                        lineNumber: 605,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/reportes/page.tsx",
                                    lineNumber: 604,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "jsx-911692e6edb4d43b",
                                    children: mockData?.aplicacionInsecticidas?.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "jsx-911692e6edb4d43b",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + "bold",
                                                    children: row.fechaAplicacion
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: row.generacion
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: row.diasAplicados
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-911692e6edb4d43b" + " " + "chip",
                                                        children: [
                                                            row.reduccionEsperada,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/reportes/page.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: row.poblacionPreTratamiento
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + "success bold",
                                                    children: row.poblacionPostTratamiento
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/reportes/page.tsx",
                                            lineNumber: 616,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/reportes/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reportes/page.tsx",
                            lineNumber: 603,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reportes/page.tsx",
                lineNumber: 600,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-911692e6edb4d43b" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-911692e6edb4d43b",
                        children: "Análisis Económico del Control"
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 635,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-911692e6edb4d43b" + " " + "table-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "jsx-911692e6edb4d43b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "jsx-911692e6edb4d43b",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "jsx-911692e6edb4d43b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Concepto"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 640,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Costo por Hectárea (USD)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 641,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Área Tratada (ha)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Costo Total (USD)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 643,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/reportes/page.tsx",
                                        lineNumber: 639,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/reportes/page.tsx",
                                    lineNumber: 638,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "jsx-911692e6edb4d43b",
                                    children: mockData?.analisisEconomico?.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "jsx-911692e6edb4d43b" + " " + ((row.isTotal ? "total-row" : row.isLoss ? "loss-row" : row.isSaving ? "saving-row" : "") || ""),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + "bold",
                                                    children: row.concepto
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: [
                                                        "$",
                                                        row.costoPorHectarea.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: row.areaTratada
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + `${row.isSaving ? "success" : row.isLoss ? "error" : ""} bold`,
                                                    children: [
                                                        "$",
                                                        row.costoTotal.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/reportes/page.tsx",
                                            lineNumber: 648,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/reportes/page.tsx",
                                    lineNumber: 646,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reportes/page.tsx",
                            lineNumber: 637,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 636,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reportes/page.tsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-911692e6edb4d43b" + " " + "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-911692e6edb4d43b",
                        children: "Eficacia del Programa de Control"
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 678,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-911692e6edb4d43b" + " " + "table-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "jsx-911692e6edb4d43b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "jsx-911692e6edb4d43b",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "jsx-911692e6edb4d43b",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Métrica"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Sin Control"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Con Control"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "jsx-911692e6edb4d43b",
                                                children: "Reducción (%)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/reportes/page.tsx",
                                                lineNumber: 686,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/reportes/page.tsx",
                                        lineNumber: 682,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/reportes/page.tsx",
                                    lineNumber: 681,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "jsx-911692e6edb4d43b",
                                    children: mockData?.eficaciaPrograma?.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "jsx-911692e6edb4d43b",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + "bold",
                                                    children: row.metrica
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + "error",
                                                    children: row.sinControl
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b" + " " + "success bold",
                                                    children: row.conControl
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "jsx-911692e6edb4d43b",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-911692e6edb4d43b" + " " + "chip",
                                                        children: row.reduccion
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/reportes/page.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/reportes/page.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/app/reportes/page.tsx",
                                            lineNumber: 691,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/reportes/page.tsx",
                                    lineNumber: 689,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/reportes/page.tsx",
                            lineNumber: 680,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/reportes/page.tsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/reportes/page.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "911692e6edb4d43b",
                children: ".container.jsx-911692e6edb4d43b{background-color:#f5f5f5;max-width:1200px;min-height:100vh;margin:0 auto;padding:2rem}.loading.jsx-911692e6edb4d43b{flex-direction:column;justify-content:center;align-items:center;height:100vh;display:flex}.spinner.jsx-911692e6edb4d43b{border:4px solid #0000001a;border-left-color:#2e7d32;border-radius:50%;width:36px;height:36px;margin-bottom:1rem;animation:1s linear infinite spin}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.header.jsx-911692e6edb4d43b{text-align:center;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:2rem;display:flex}h1.jsx-911692e6edb4d43b{color:#2e7d32;margin-bottom:.5rem;font-size:2rem}.back-button.jsx-911692e6edb4d43b{color:#2e7d32;background:#fff;border:1px solid #2e7d32;border-radius:4px;padding:.5rem 1rem;font-weight:500;text-decoration:none}.download-button.jsx-911692e6edb4d43b{color:#fff;cursor:pointer;background:#2e7d32;border:none;border-radius:4px;padding:.5rem 1rem;font-weight:500}.charts-grid.jsx-911692e6edb4d43b{grid-template-columns:repeat(auto-fit,minmax(500px,1fr));gap:1.5rem;margin-bottom:2rem;display:grid}.chart-card.jsx-911692e6edb4d43b{background:#fff;border-radius:8px;padding:1.5rem;box-shadow:0 4px 6px #0000001a}.chart-header.jsx-911692e6edb4d43b{align-items:center;gap:.5rem;margin-bottom:1rem;display:flex}.chart-icon.jsx-911692e6edb4d43b{font-size:1.2rem}.chart-icon.red.jsx-911692e6edb4d43b{color:#ef4444}.chart-icon.blue.jsx-911692e6edb4d43b{color:#3b82f6}.chart-icon.green.jsx-911692e6edb4d43b{color:#10b981}.chart-icon.purple.jsx-911692e6edb4d43b{color:#8b5cf6}.chart-container.jsx-911692e6edb4d43b{height:200px}h3.jsx-911692e6edb4d43b{color:#333;margin:0;font-size:1.1rem}.card.jsx-911692e6edb4d43b{background:#fff;border-radius:8px;margin-bottom:2rem;padding:1.5rem;box-shadow:0 4px 6px #0000001a}h2.jsx-911692e6edb4d43b{color:#333;margin-top:0;font-size:1.5rem}.table-container.jsx-911692e6edb4d43b{overflow-x:auto}table.jsx-911692e6edb4d43b{border-collapse:collapse;width:100%}th.jsx-911692e6edb4d43b,td.jsx-911692e6edb4d43b{text-align:left;border-bottom:1px solid #eee;padding:.75rem}th.jsx-911692e6edb4d43b{background-color:#f9f9f9;font-weight:600}.bold.jsx-911692e6edb4d43b{font-weight:600}.success.jsx-911692e6edb4d43b{color:#2e7d32}.error.jsx-911692e6edb4d43b{color:#d32f2f}.chip.jsx-911692e6edb4d43b{color:#2e7d32;background-color:#e8f5e9;border-radius:16px;padding:.25rem .5rem;font-size:.875rem;font-weight:500}.total-row.jsx-911692e6edb4d43b{background-color:#e3f2fd}.loss-row.jsx-911692e6edb4d43b{background-color:#ffebee}.saving-row.jsx-911692e6edb4d43b{background-color:#e8f5e8}@media (width<=768px){.charts-grid.jsx-911692e6edb4d43b{grid-template-columns:1fr}.header.jsx-911692e6edb4d43b{flex-direction:column;align-items:stretch}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/reportes/page.tsx",
        lineNumber: 463,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_reportes_page_tsx_e2f9d1e0._.js.map