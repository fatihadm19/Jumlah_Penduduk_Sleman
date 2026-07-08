var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kabupaten_Sleman_1 = new ol.format.GeoJSON();
var features_Kabupaten_Sleman_1 = format_Kabupaten_Sleman_1.readFeatures(json_Kabupaten_Sleman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabupaten_Sleman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabupaten_Sleman_1.addFeatures(features_Kabupaten_Sleman_1);
var lyr_Kabupaten_Sleman_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabupaten_Sleman_1, 
                style: style_Kabupaten_Sleman_1,
                popuplayertitle: 'Kabupaten_Sleman',
                interactive: true,
    title: 'Kabupaten_Sleman<br />\
    <img src="styles/legend/Kabupaten_Sleman_1_0.png" /> 32720 - 38460 Jiwa (Kecil)<br />\
    <img src="styles/legend/Kabupaten_Sleman_1_1.png" /> 38460 - 56200 Jiwa (Sedang)<br />\
    <img src="styles/legend/Kabupaten_Sleman_1_2.png" /> 56200 - 74480 Jiwa (Menengah)<br />\
    <img src="styles/legend/Kabupaten_Sleman_1_3.png" /> 74480 - 105310 Jiwa (Besar)<br />\
    <img src="styles/legend/Kabupaten_Sleman_1_4.png" /> 105310 - 140280 Jiwa (Sangat Besar)<br />' });
var format_PolygonToLines_2 = new ol.format.GeoJSON();
var features_PolygonToLines_2 = format_PolygonToLines_2.readFeatures(json_PolygonToLines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolygonToLines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolygonToLines_2.addFeatures(features_PolygonToLines_2);
var lyr_PolygonToLines_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolygonToLines_2, 
                style: style_PolygonToLines_2,
                popuplayertitle: 'Polygon To Lines',
                interactive: true,
                title: '<img src="styles/legend/PolygonToLines_2.png" /> Polygon To Lines'
            });
var format_ExplodeLines_3 = new ol.format.GeoJSON();
var features_ExplodeLines_3 = format_ExplodeLines_3.readFeatures(json_ExplodeLines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExplodeLines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExplodeLines_3.addFeatures(features_ExplodeLines_3);
var lyr_ExplodeLines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExplodeLines_3, 
                style: style_ExplodeLines_3,
                popuplayertitle: 'Explode Lines',
                interactive: true,
                title: '<img src="styles/legend/ExplodeLines_3.png" /> Explode Lines'
            });
var format_DeleteDuplicateGeometries_4 = new ol.format.GeoJSON();
var features_DeleteDuplicateGeometries_4 = format_DeleteDuplicateGeometries_4.readFeatures(json_DeleteDuplicateGeometries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeleteDuplicateGeometries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeleteDuplicateGeometries_4.addFeatures(features_DeleteDuplicateGeometries_4);
var lyr_DeleteDuplicateGeometries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeleteDuplicateGeometries_4, 
                style: style_DeleteDuplicateGeometries_4,
                popuplayertitle: 'Delete Duplicate Geometries',
                interactive: true,
                title: '<img src="styles/legend/DeleteDuplicateGeometries_4.png" /> Delete Duplicate Geometries'
            });
var format_Dissolve_5 = new ol.format.GeoJSON();
var features_Dissolve_5 = format_Dissolve_5.readFeatures(json_Dissolve_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolve_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolve_5.addFeatures(features_Dissolve_5);
var lyr_Dissolve_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolve_5, 
                style: style_Dissolve_5,
                popuplayertitle: 'Dissolve',
                interactive: true,
                title: '<img src="styles/legend/Dissolve_5.png" /> Dissolve'
            });
var format_PointOnSurface_6 = new ol.format.GeoJSON();
var features_PointOnSurface_6 = format_PointOnSurface_6.readFeatures(json_PointOnSurface_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointOnSurface_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointOnSurface_6.addFeatures(features_PointOnSurface_6);
var lyr_PointOnSurface_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointOnSurface_6, 
                style: style_PointOnSurface_6,
                popuplayertitle: 'Point On Surface',
                interactive: true,
                title: '<img src="styles/legend/PointOnSurface_6.png" /> Point On Surface'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Kabupaten_Sleman_1.setVisible(true);lyr_PolygonToLines_2.setVisible(true);lyr_ExplodeLines_3.setVisible(true);lyr_DeleteDuplicateGeometries_4.setVisible(true);lyr_Dissolve_5.setVisible(true);lyr_PointOnSurface_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kabupaten_Sleman_1,lyr_PolygonToLines_2,lyr_ExplodeLines_3,lyr_DeleteDuplicateGeometries_4,lyr_Dissolve_5,lyr_PointOnSurface_6];
lyr_Kabupaten_Sleman_1.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Nama_Kecamatan', 'JoinLaki-laki': 'Jumlah_Laki-laki', 'JoinPerempuan': 'Jumlah_Perempuan', 'JoinJumlah': 'Jumlah_Total', });
lyr_PolygonToLines_2.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Nama_Kecamatan', 'JoinLaki-laki': 'Jumlah_Laki-laki', 'JoinPerempuan': 'Jumlah_Perempuan', 'JoinJumlah': 'Jumlah_Total', });
lyr_ExplodeLines_3.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Nama_Kecamatan', 'JoinLaki-laki': 'Jumlah_Laki-laki', 'JoinPerempuan': 'Jumlah_Perempuan', 'JoinJumlah': 'Jumlah_Total', });
lyr_DeleteDuplicateGeometries_4.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Nama_Kecamatan', 'JoinLaki-laki': 'Jumlah_Laki-laki', 'JoinPerempuan': 'Jumlah_Perempuan', 'JoinJumlah': 'Jumlah_Total', });
lyr_Dissolve_5.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Nama_Kecamatan', 'JoinLaki-laki': 'Jumlah_Laki-laki', 'JoinPerempuan': 'Jumlah_Perempuan', 'JoinJumlah': 'Jumlah_Total', });
lyr_PointOnSurface_6.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Nama_Kecamatan', 'JoinLaki-laki': 'Jumlah_Laki-laki', 'JoinPerempuan': 'Jumlah_Perempuan', 'JoinJumlah': 'Jumlah_Total', });
lyr_Kabupaten_Sleman_1.set('fieldImages', {'fid': 'Hidden', 'WADMKC': 'TextEdit', 'JoinLaki-laki': 'Range', 'JoinPerempuan': 'Range', 'JoinJumlah': 'Range', });
lyr_PolygonToLines_2.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'JoinLaki-laki': 'Range', 'JoinPerempuan': 'Range', 'JoinJumlah': 'Range', });
lyr_ExplodeLines_3.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'JoinLaki-laki': 'Range', 'JoinPerempuan': 'Range', 'JoinJumlah': 'Range', });
lyr_DeleteDuplicateGeometries_4.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'JoinLaki-laki': 'Range', 'JoinPerempuan': 'Range', 'JoinJumlah': 'Range', });
lyr_Dissolve_5.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'JoinLaki-laki': 'Range', 'JoinPerempuan': 'Range', 'JoinJumlah': 'Range', });
lyr_PointOnSurface_6.set('fieldImages', {'fid': 'TextEdit', 'WADMKC': 'TextEdit', 'JoinLaki-laki': 'Range', 'JoinPerempuan': 'Range', 'JoinJumlah': 'Range', });
lyr_Kabupaten_Sleman_1.set('fieldLabels', {'WADMKC': 'inline label - visible with data', 'JoinLaki-laki': 'hidden field', 'JoinPerempuan': 'inline label - always visible', 'JoinJumlah': 'inline label - always visible', });
lyr_PolygonToLines_2.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'JoinLaki-laki': 'no label', 'JoinPerempuan': 'no label', 'JoinJumlah': 'no label', });
lyr_ExplodeLines_3.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'JoinLaki-laki': 'no label', 'JoinPerempuan': 'no label', 'JoinJumlah': 'no label', });
lyr_DeleteDuplicateGeometries_4.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'JoinLaki-laki': 'no label', 'JoinPerempuan': 'no label', 'JoinJumlah': 'no label', });
lyr_Dissolve_5.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'JoinLaki-laki': 'no label', 'JoinPerempuan': 'no label', 'JoinJumlah': 'no label', });
lyr_PointOnSurface_6.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'JoinLaki-laki': 'no label', 'JoinPerempuan': 'no label', 'JoinJumlah': 'no label', });
lyr_PointOnSurface_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});