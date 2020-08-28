var overviewerConfig = {
    "map": {
        "controls": {
            "spawn": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true,
            "pan": true,
            "compass": true,
            "zoom": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598608884"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "name": "Daytime Render",
            "path": "day",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "imgextension": "png",
            "maxZoom": 10,
            "last_rendertime": 1598608680,
            "isOverlay": false,
            "poititle": "Markers",
            "zoomLevels": 10,
            "base": ""
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap"
    }
};
