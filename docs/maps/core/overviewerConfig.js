var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        }
    },
    "map": {
        "debug": true,
        "cacheTag": "1595995282",
        "controls": {
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "overlays": true,
            "zoom": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "zoomLevels": 10,
            "minZoom": 0,
            "north_direction": 0,
            "last_rendertime": 1595995080,
            "world": "Core01",
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "poititle": "Markers",
            "isOverlay": false,
            "imgextension": "png",
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "path": "day",
            "base": "",
            "showlocationmarker": true
        }
    ]
};
