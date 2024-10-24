var wms_layers = [];


        var lyr_satellite_0 = new ol.layer.Tile({
            'title': 'satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Fracciones_Tezopan_1 = new ol.format.GeoJSON();
var features_Fracciones_Tezopan_1 = format_Fracciones_Tezopan_1.readFeatures(json_Fracciones_Tezopan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fracciones_Tezopan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fracciones_Tezopan_1.addFeatures(features_Fracciones_Tezopan_1);
var lyr_Fracciones_Tezopan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fracciones_Tezopan_1, 
                style: style_Fracciones_Tezopan_1,
                popuplayertitle: "Fracciones_Tezopan",
                interactive: true,
                title: '<img src="styles/legend/Fracciones_Tezopan_1.png" /> Fracciones_Tezopan'
            });
var format_Tezopan1_2 = new ol.format.GeoJSON();
var features_Tezopan1_2 = format_Tezopan1_2.readFeatures(json_Tezopan1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tezopan1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tezopan1_2.addFeatures(features_Tezopan1_2);
var lyr_Tezopan1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tezopan1_2, 
                style: style_Tezopan1_2,
                popuplayertitle: "Tezopan1",
                interactive: true,
                title: '<img src="styles/legend/Tezopan1_2.png" /> Tezopan1'
            });

lyr_satellite_0.setVisible(true);lyr_Fracciones_Tezopan_1.setVisible(true);lyr_Tezopan1_2.setVisible(true);
var layersList = [lyr_satellite_0,lyr_Fracciones_Tezopan_1,lyr_Tezopan1_2];
lyr_Fracciones_Tezopan_1.set('fieldAliases', {'SUPERFICIE': 'SUPERFICIE', 'Fracciones': 'Fracciones', 'Plantas': 'Plantas', });
lyr_Tezopan1_2.set('fieldAliases', {'x': 'x', 'y': 'y', });
lyr_Fracciones_Tezopan_1.set('fieldImages', {'SUPERFICIE': 'TextEdit', 'Fracciones': 'TextEdit', 'Plantas': 'Range', });
lyr_Tezopan1_2.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Fracciones_Tezopan_1.set('fieldLabels', {'SUPERFICIE': 'header label - visible with data', 'Fracciones': 'no label', 'Plantas': 'no label', });
lyr_Tezopan1_2.set('fieldLabels', {'x': 'no label', 'y': 'no label', });
lyr_Tezopan1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});