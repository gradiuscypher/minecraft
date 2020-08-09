var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1596981683",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "compass": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true
        }
    },
    "CONST": {
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "path": "day",
            "minZoom": 0,
            "defaultZoom": 1,
            "zoomLevels": 10,
            "north_direction": 0,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1596981480,
            "base": "",
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "isOverlay": false
        }
    ]
};
