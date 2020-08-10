var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "path": "day",
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "zoomLevels": 10,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "isOverlay": false,
            "north_direction": 0,
            "minZoom": 0,
            "world": "Core01",
            "last_rendertime": 1597046280
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1597046482",
        "controls": {
            "spawn": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "pan": true,
            "overlays": true,
            "mapType": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
