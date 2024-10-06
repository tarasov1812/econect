**<h1>The 2024 NASA Space Apps Challenge</h1>**

**<h3>Challange:** Tell Us a Climate Story!</h3>

**<h3>Description:** Our project, EcoNect, is based on raising awareness about the impact of greenhouse gases on our planet. This will be done through an application. When opened, the app will display a 3-minute video that tells the story of our planet. It shows how the Earth has been deteriorating and, as a last hope, the Earth asks for help from a little girl.
This girl represents hope for change and shows that we still have time to save the planet. As a solution, EcoNet is presented as a social network where you can discover ways to help the environment. It aims to promote sustainable development and make it accessible to all audiences.</h3>


**<h3>Application Screenshots</h3>**
![MainPage](screenshots/screen1.png)
![MainPage](screenshots/screen2.png)


**How to launch the APP:**
1. mvn clean install
2. cd target
3. java -jar econet-0.0.1-SNAPSHOT.jar
4. Go to - http://localhost:8080

**DATOS USADOS:**
1. Emisiones y absorciones anuales globales de CO2: "Presupuestos de CO₂ de arriba hacia abajo del OCO-2 MIP
   https://earth.gov/ghgcenter/data-catalog/oco2-mip-co2budget-yeargrid-v1
   Temporal Extent: 2015 – 2020
   Temporal Resolution: Annual
   Spatial Extent: Global
   Spatial Resolution: 1° x 1°
   Data Units: Grams of carbon dioxide per square meter per year (g CO₂/m²/yr)
   Data Type: Research
   Data Latency: N/A

2. Concentraciones globales de metano: "Concentraciones atmosféricas de metano del Laboratorio de Monitoreo Global de la NOAA
   Temporal Extent: 1976 - 2023, varies by station
   Temporal Resolution: The GHG Center provides only daily and monthly means for continuous measurements; temporal resolution varies by station for non-continuous measurements, (can be daily up to weekly)
   Spatial Extent: Global
   Spatial Resolution: Point location samples
   Data Units: Parts CH₄ per billion (ppb)
   Data Type: Operational
   Data Latency: Updated annually

3. Flujos globales de carbono: "Flujo de carbono terrestre de MiCASA
   Temporal Extent: January 1, 2001 - December 31, 2023
   Temporal Resolution: Daily and Monthly Averages
   Spatial Extent: Global
   Spatial Resolution: 0.1° x 0.1°
   Data Units: Grams of Carbon per square meter per day (g Carbon/m²/day)
   Data Type: Research
   Data Latency: Less than a year, typically 6 months


