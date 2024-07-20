<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                table, th, td {
                    border: 1px solid black;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
        </head>
        <body>
            <h1>Clientes</h1>
            <table>
                <tr>
                    <th>Empresa</th>
                    <th>País</th>
                    <th>Industria</th>
                    <th>Empleados</th>
                    <th>Ingresos</th>
                </tr>
                <xsl:for-each select="dataroot/Clientes">
                    <tr>
                        <td><xsl:value-of select="Empresa"/></td>
                        <td><xsl:value-of select="País"/></td>
                        <td><xsl:value-of select="Industria"/></td>
                        <td><xsl:value-of select="Empleados"/></td>
                        <td><xsl:value-of select="Ingresos"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>