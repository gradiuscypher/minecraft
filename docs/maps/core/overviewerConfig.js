var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true
        },
        "cacheTag": "1596513683",
        "debug": true,
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1596513480,
            "poititle": "Markers",
            "showlocationmarker": true,
            "base": "",
            "name": "Daytime Render",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "zoomLevels": 10,
            "maxZoom": 10,
            "minZoom": 0,
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day"
        }
    ]
};
