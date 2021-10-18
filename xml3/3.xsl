<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match = "/">
<html>
<body>
<h2> Список университетов, где есть моя специальность, и информация о ней</h2>
 <table border="1">
 <tr bgcolor="#E0B0FF">
 <th style="text-align:center">Университет</th>
 <th style="text-align:center">Специальность</th>
 <th style="text-align:center">Проходной балл</th>
 <th style="text-align:center">План набора</th>
 <th style="text-align:center">Город</th>
 </tr>
<xsl:for-each select="my/my1">
 <tr>
 <td><xsl:value-of select="univer"></xsl:value-of></td>
 <td><xsl:value-of select="spec"></xsl:value-of></td>
 <td><xsl:value-of select="score"></xsl:value-of></td>
 <td><xsl:value-of select="plan"></xsl:value-of></td>
 <td><xsl:value-of select="city"></xsl:value-of></td>
 </tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

