var overviewerConfig = {
    "map": {
        "cacheTag": "1596654082",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "zoom": true
        }
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "north_direction": 0,
            "imgextension": "png",
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "name": "Daytime Render",
            "zoomLevels": 10,
            "minZoom": 0,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "day",
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1596653880
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    }
};
