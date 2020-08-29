var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        }
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "mapType": true
        },
        "cacheTag": "1598695284"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "last_rendertime": 1598695080,
            "isOverlay": false,
            "minZoom": 0,
            "imgextension": "png",
            "zoomLevels": 10,
            "poititle": "Markers",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "base": "",
            "path": "day",
            "name": "Daytime Render",
            "maxZoom": 10,
            "defaultZoom": 1
        }
    ]
};
