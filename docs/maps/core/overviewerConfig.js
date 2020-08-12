var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0
    },
    "map": {
        "cacheTag": "1597197731",
        "debug": true,
        "controls": {
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "pan": true,
            "spawn": true
        },
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "north_direction": 0,
            "maxZoom": 10,
            "name": "Daytime Render",
            "base": "",
            "poititle": "Markers",
            "last_rendertime": 1597197480,
            "world": "Core01",
            "path": "day",
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "imgextension": "png"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
