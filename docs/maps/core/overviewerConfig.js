var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1596913282",
        "controls": {
            "compass": true,
            "mapType": true,
            "zoom": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true
        }
    },
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        }
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "path": "day",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "minZoom": 0,
            "imgextension": "png",
            "world": "Core01",
            "zoomLevels": 10,
            "name": "Daytime Render",
            "base": "",
            "last_rendertime": 1596913080
        }
    ],
    "worlds": [
        "Core01"
    ]
};
