var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        }
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596369684",
        "controls": {
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "spawn": true,
            "overlays": true
        },
        "debug": true
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "world": "Core01",
            "base": "",
            "imgextension": "png",
            "minZoom": 0,
            "last_rendertime": 1596369480,
            "defaultZoom": 1,
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "path": "day",
            "north_direction": 0,
            "zoomLevels": 10,
            "showlocationmarker": true,
            "maxZoom": 10
        }
    ],
    "worlds": [
        "Core01"
    ]
};
