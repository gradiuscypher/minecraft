var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "isOverlay": false,
            "path": "day",
            "showlocationmarker": true,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "world": "Core01",
            "last_rendertime": 1597964280,
            "base": "",
            "name": "Daytime Render",
            "maxZoom": 10,
            "poititle": "Markers",
            "minZoom": 0,
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1597964484",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "compass": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "zoom": true
        }
    }
};
