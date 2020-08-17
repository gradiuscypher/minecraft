var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "tilesets": [
        {
            "base": "",
            "world": "Core01",
            "poititle": "Markers",
            "last_rendertime": 1597651080,
            "minZoom": 0,
            "north_direction": 0,
            "maxZoom": 10,
            "path": "day",
            "zoomLevels": 10,
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "isOverlay": false,
            "imgextension": "png",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "zoom": true,
            "compass": true,
            "mapType": true
        },
        "cacheTag": "1597651283"
    }
};
