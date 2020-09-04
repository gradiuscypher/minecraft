var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "world": "Core01",
            "zoomLevels": 10,
            "minZoom": 0,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "showlocationmarker": true,
            "isOverlay": false,
            "base": "",
            "last_rendertime": 1599209880,
            "imgextension": "png",
            "name": "Daytime Render",
            "poititle": "Markers",
            "path": "day",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1
        }
    ],
    "map": {
        "cacheTag": "1599210086",
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "compass": true,
            "spawn": true,
            "mapType": true
        },
        "debug": true
    }
};
