var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1598572888",
        "debug": true,
        "controls": {
            "compass": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "mapType": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "base": "",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "path": "day",
            "north_direction": 0,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "imgextension": "png",
            "isOverlay": false,
            "zoomLevels": 10,
            "minZoom": 0,
            "last_rendertime": 1598572680
        }
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "UPPERLEFT": 0
    }
};
