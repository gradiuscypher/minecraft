var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        }
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "poititle": "Markers",
            "name": "Daytime Render",
            "path": "day",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "last_rendertime": 1597301880,
            "isOverlay": false,
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "world": "Core01",
            "zoomLevels": 10,
            "imgextension": "png",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1597302083",
        "controls": {
            "overlays": true,
            "mapType": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true
        },
        "north_direction": "lower-left"
    }
};
