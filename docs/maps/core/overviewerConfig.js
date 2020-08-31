var overviewerConfig = {
    "tilesets": [
        {
            "path": "day",
            "north_direction": 0,
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "defaultZoom": 1,
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "name": "Daytime Render",
            "minZoom": 0,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "world": "Core01",
            "imgextension": "png",
            "last_rendertime": 1598860680
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "compass": true,
            "zoom": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "pan": true
        },
        "cacheTag": "1598860884"
    }
};
