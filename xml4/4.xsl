<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match = "/">
<html>
<body>
<h2>Группа</h2>
<table border="1">
 <tr bgcolor="#E0B0FF">
 <th style="text-align:center">Фамилия</th>
 <th style="text-align:center">Имя</th>
 <th style="text-align:center">Отчество</th>
 <th style="text-align:center">Средний балл</th>
 <th style="text-align:center">Год рождения</th>
 </tr>
 <xsl:for-each select="my/stud">
 <xsl:sort select="year"/>
 <tr>
 <td><xsl:choose>
 <xsl:when test="score &lt; 6">
 <span style="color: red"><xsl:value-of select="surname"></xsl:value-of></span>
 </xsl:when>
 <xsl:when test="score = 6">
 <span style="color: green"><xsl:value-of select="surname"></xsl:value-of></span>
 </xsl:when>
 <xsl:otherwise><xsl:value-of select="surname"></xsl:value-of></xsl:otherwise>
 </xsl:choose></td>
 <td><xsl:value-of select="name"></xsl:value-of></td>
 <td><xsl:value-of select="fname"></xsl:value-of></td>
 <td>
 <xsl:value-of select="score"></xsl:value-of>
 </td>
 <td><xsl:value-of select="year"></xsl:value-of></td>
 </tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>