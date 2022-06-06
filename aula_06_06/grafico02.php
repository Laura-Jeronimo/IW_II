<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gráficos</title>
</head>
<body>

<div id="piechart" style="width: 900px; height: 500px;"></div>

<?php

$tarefas = ['Escola', 'Trabalho', 'Ler', 'Estudo', 'Dormir'];
$horas = [6, 6, 2, 3, 7];
$tam = count($horas);

?>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Tarefa', 'Horas por dia'],
          
           
          <?php 
          
          for($i = 0; $i < $tam; $i++){
            ?>
                ['<?= $tarefas[$i]; ?>', <?= $horas[$i]; ?>],

            <?php
          }
      
          ?>
 

        ]);

        var options = {
          title: 'Atividades diárias'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
</script>

</body>
</html>