var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384
    },
    "tilesets": [
        {
            "minZoom": 0,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "name": "Daytime Render",
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1598154979,
            "base": "",
            "isOverlay": false,
            "path": "day",
            "north_direction": 0,
            "poititle": "Markers",
            "imgextension": "png",
            "zoomLevels": 8,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "pan": true,
            "overlays": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1598155369",
        "north_direction": "lower-left"
    }
};
