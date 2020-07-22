var overviewerConfig = {
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1595437281",
        "controls": {
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "overlays": true,
            "mapType": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "showlocationmarker": true,
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "zoomLevels": 9,
            "last_rendertime": 1595437080,
            "defaultZoom": 1,
            "north_direction": 0,
            "name": "Daytime Render",
            "world": "Core01",
            "imgextension": "png",
            "base": ""
        }
    ],
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    }
};
