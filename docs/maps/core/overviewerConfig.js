var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "zoomLevels": 10,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "world": "Core01",
            "minZoom": 0,
            "path": "day",
            "base": "",
            "last_rendertime": 1598025480,
            "imgextension": "png",
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "poititle": "Markers"
        }
    ],
    "map": {
        "controls": {
            "compass": true,
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true
        },
        "cacheTag": "1598025685",
        "debug": true,
        "north_direction": "lower-left"
    }
};
