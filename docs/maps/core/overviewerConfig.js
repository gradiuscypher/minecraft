var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png"
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "base": "",
            "showlocationmarker": true,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "defaultZoom": 1,
            "poititle": "Markers",
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "last_rendertime": 1598410680,
            "world": "Core01",
            "zoomLevels": 10,
            "imgextension": "png",
            "path": "day"
        }
    ],
    "map": {
        "cacheTag": "1598410885",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "overlays": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true
        }
    }
};
